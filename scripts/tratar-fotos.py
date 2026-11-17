"""Tratamento fotográfico padronizado das fotos da Congõi.

Uso: python scripts/tratar-fotos.py
Lê de ./imagens e grava WebP otimizados em ./public/photos.
Ajustes leves e iguais para todas as fotos (exposição, contraste, cor e nitidez),
preservando as cores reais da marca.
"""
from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter, ImageStat

SRC = Path('imagens')
OUT = Path('public/photos')
OUT.mkdir(parents=True, exist_ok=True)

# arquivo original -> (nome no site, ajuste extra de exposição)
PHOTOS = {
    'unnamed (1).webp': ('kombi-parque', 1.00),
    'unnamed (8).webp': ('kombi-rua', 1.00),
    'donos.webp': ('fundadores-fabrica', 1.03),
    'unnamed (7).webp': ('fundadores-kombi', 1.00),
    'unnamed (4).webp': ('torneiras-kombi', 1.02),
    'unnamed (6).webp': ('torneiras-evento', 1.02),
    'unnamed (2).webp': ('kit-festa-mao', 1.00),
    'unnamed (5).webp': ('kit-festa-igreja', 1.00),
    'unnamed (3).webp': ('kits-detalhe', 1.00),
    'unnamed.webp': ('kit-embalagem-junina', 1.00),
}

TARGET_LUMA = 122  # brilho médio alvo (0–255)


def grade(im: Image.Image, exposure: float) -> Image.Image:
    im = im.convert('RGB')
    # 1. exposição: aproxima suavemente o brilho médio do alvo (no máx. ±10%)
    luma = ImageStat.Stat(im.convert('L')).mean[0]
    factor = max(0.9, min(1.1, (TARGET_LUMA / luma) ** 0.35)) * exposure
    im = ImageEnhance.Brightness(im).enhance(factor)
    # 2. contraste e saturação discretos
    im = ImageEnhance.Contrast(im).enhance(1.06)
    im = ImageEnhance.Color(im).enhance(1.04)
    # 3. leve aquecimento (tom "âmbar" comum a todas as fotos)
    r, g, b = im.split()
    r = r.point(lambda v: min(255, int(v * 1.015)))
    b = b.point(lambda v: int(v * 0.985))
    im = Image.merge('RGB', (r, g, b))
    # 4. nitidez sutil
    return im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=45, threshold=3))


for src, (name, exposure) in PHOTOS.items():
    im = grade(Image.open(SRC / src), exposure)
    im.save(OUT / f'{name}.webp', quality=86, method=6)
    print(f'{src:22s} -> {name}.webp {im.size}')
