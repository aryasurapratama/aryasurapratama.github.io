# Icon sources and use

UI icons and brand marks serve different roles. `ui.svg` is a coherent Lucide stroke icon sprite. Brand files retain the source geometry and must remain recognizable, with proportional sizing.

## General UI: Lucide

Pinned upstream revision: `70562c1ee1c4fdcf736fe97bc893fb8511927934`. Geometry is copied from the [official Lucide repository](https://github.com/lucide-icons/lucide/tree/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons), with no rewritten path data. The SVG root presentation attributes are placed on each local symbol so it can be used through `<use href="assets/icons/ui.svg#icon-arrow">`.

| Local symbol    | Upstream icon                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `icon-arrow`    | [arrow-up-right.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/arrow-up-right.svg) |
| `icon-right`    | [arrow-right.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/arrow-right.svg)       |
| `icon-academic` | [graduation-cap.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/graduation-cap.svg) |
| `icon-building` | [landmark.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/landmark.svg)             |
| `icon-book`     | [book-open.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/book-open.svg)           |
| `icon-code`     | [code-xml.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/code-xml.svg)             |
| `icon-copy`     | [copy.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/copy.svg)                     |
| `icon-pin`      | [map-pin.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/map-pin.svg)               |
| `icon-menu`     | [menu.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/menu.svg)                     |
| `icon-close`    | [x.svg](https://github.com/lucide-icons/lucide/blob/70562c1ee1c4fdcf736fe97bc893fb8511927934/icons/x.svg)                           |

Lucide is licensed under ISC; some inherited Feather icons also carry the MIT notice. The complete upstream notices are included in [`LUCIDE_LICENSE.txt`](LUCIDE_LICENSE.txt).

## Social brands: Simple Icons

Pinned upstream revision: `dc7b10662a0a2cfdfc9305e2a2b06c023c30724a`. The downloaded SVG files are unchanged byte for byte. `brands.svg` combines their path data into local symbols without altering geometry; monochrome foreground colors follow the surrounding contact controls. Source filenames and SHA-256 hashes:

| File            | Source                                                                                                                                | SHA-256                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `whatsapp.svg`  | [Simple Icons source](https://github.com/simple-icons/simple-icons/blob/dc7b10662a0a2cfdfc9305e2a2b06c023c30724a/icons/whatsapp.svg)  | `8fb209a53a61618c3483594b3e070481a35575d6aaecbe00a6fe386670c8fb1c` |
| `instagram.svg` | [Simple Icons source](https://github.com/simple-icons/simple-icons/blob/dc7b10662a0a2cfdfc9305e2a2b06c023c30724a/icons/instagram.svg) | `f53af2d1fc5292ba1433b5c1faf50005ce6a997fa302d1816989929f379a59dc` |
| `github.svg`    | [Simple Icons source](https://github.com/simple-icons/simple-icons/blob/dc7b10662a0a2cfdfc9305e2a2b06c023c30724a/icons/github.svg)    | `3bf8cceead820aec50d4ee825a3fd02c5a1cd6665cc9cf4cbf3d9c8861a204bb` |

The Simple Icons project is published under CC0, included in [`SIMPLE_ICONS_LICENSE.md`](SIMPLE_ICONS_LICENSE.md). The [upstream disclaimer](https://github.com/simple-icons/simple-icons/blob/dc7b10662a0a2cfdfc9305e2a2b06c023c30724a/DISCLAIMER.md), copied in [`SIMPLE_ICONS_DISCLAIMER.md`](SIMPLE_ICONS_DISCLAIMER.md), makes clear that brand trademarks and any additional terms are retained by their owners. These assets identify links to the owner's profiles; they do not imply platform endorsement.

Official brand references recorded by Simple Icons:

- GitHub: [official logos](https://github.com/logos).
- Instagram: [Meta brand resource](https://about.meta.com/brand/resources/instagram).
- WhatsApp: [Meta brand resource](https://about.meta.com/brand/resources/whatsapp/whatsapp-brand).

## ORCID iD

`orcid.svg` is downloaded unchanged from the [official ORCID source repository](https://github.com/ORCID/ORCID-Source/blob/2ba4d5bafcc248bf39bc3102eab3d8eb0b9ad9e8/orcid-web/src/main/webapp/static/img/id-icon.svg), pinned revision `2ba4d5bafcc248bf39bc3102eab3d8eb0b9ad9e8`. SHA-256: `26483c4d9c32c10f7d5a7dc895ede560696336d336dac582dc3c6a8b94500919`. The supplied green circle and white iD geometry are preserved.

ORCID™, the ORCID logo, and the iD logo are trademarks of ORCID, Inc. Use follows [ORCID Brand Guidelines](https://info.orcid.org/brand-guidelines/) and [ORCID iD Display Guidelines](https://info.orcid.org/documentation/integration-guide/orcid-id-display-guidelines/): preserve the supplied artwork and colorway, keep an appropriate readable size, and link to the record holder's public profile. This local asset is a profile link mark and is not an assertion that an ORCID OAuth authentication workflow has been implemented.
