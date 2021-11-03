---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: false
description: "In contrast subsymbolic processing specifies no such rules a priori and relies on emergent properties of processing units"
weight: 1
portfolio: ['research']
header_transparent: true
thumbnail: 'https://source.unsplash.com/CHLehnxQSFQ/700x800'
hero:
    background: 'https://source.unsplash.com/CHLehnxQSFQ/1600x900'
    blend_mode: "overlay"
    theme: "primary"
work: 
    heading: Stanford
    heading_label: "Client"
    brief: "A research paper to explore to explore cognitive architectures. Some cognitive architectures or models are based on a set of generic rules, as, e.g., the Information Processing Language."
    link: "https://www.researchgate.net/topic/Engineering"
---

Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

Since the initial description of Markdown contained ambiguities and unanswered questions, the implementations that appeared over the years have subtle differences and many come with syntax extensions.

## History

John Gruber created the Markdown language in 2004 in collaboration with Aaron Swartz on the syntax, with the goal of enabling people "to write using an easy-to-read and easy-to-write plain text format". Its key design goal is readability. That the language be readable as-is. 

> To write using an easy-to-read and easy-to-write plain text format

To this end, its main inspiration is the existing conventions for marking up plain text in email, though it also draws from earlier markup languages, notably setext, Textile, and reStructuredText.

## Example

```js
$(window).scroll(function() {
  // this will work when your window scrolled.
  var scroll = $(window).scrollTop(); //getting the scrolling height of window
  if (scroll > 100) {
    $('.header').addClass('header-scrolled');
  } else {
    $('.header').removeClass('header-scrolled');
  }
});
```

## Markdown Flavours

There are several different versions of markdown

### CommonMark

From 2012, a group of people including Jeff Atwood and John MacFarlane launched what Atwood characterized as a standardization effort. A community website now aims to "document various tools and resources available to document authors and developers, as well as implementors of the various markdown implementations".

### GitHub Flavored Markdown (GFM)

In 2017, GitHub released a formal specification of their GitHub Flavored Markdown (GFM) that is based on CommonMark. It follows the CommonMark specification exactly except for tables, strikethrough, autolinks and task lists, which the GitHub spec has added as extensions. GitHub also changed the parser used on their sites accordingly, which required that some documents be changed. For instance, GFM now requires that the hash symbol that creates a heading be separated from the heading text by a space character.he user to create their own.

![écrivez sans crainte](/images/posts/hannah-grace-j9JoYpaJH3A-unsplash-800.jpg)

### Markdown Extra

Markdown Extra is a lightweight markup language based on Markdown implemented in PHP (originally), Python and Ruby. It adds features not available with plain Markdown syntax. Markdown Extra is supported in some content management systems such as, for example, Drupal.

Markdown Extra adds the following features to Markdown:

* markdown markup inside HTML blocks
* elements with id/class attribute
* "fenced code blocks" that span multiple lines of code
* tables
* definition lists
* footnotes
* abbreviations