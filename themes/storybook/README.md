# Storybook Theme for Hugo

This is a multi-section single page theme intended as a storybook.

Preview at 

## Usage

Drop it in your site's themes folder, then modify your site config file to specify the theme `storybook`, or use the `-t storybook` command line switch.

## Configuration and Content


### Content Directory Layout

```
.
...
├── content
|   ├── _index.md
|   └── sections
|       ├── index.md
|       ├── section_data_1.md
|       ├── section_data_2.md
|       ├── section_data_3.md
...
```

`content/_index.md` specifies front matter for the page.  `content/sections/` contains all the sections that are displayed on the page. `content/sections/index.md` should contain front matter specifying that the directory is `headless`.  Other `content/sections/*.md` files can be named anything, and comprise the section content.

