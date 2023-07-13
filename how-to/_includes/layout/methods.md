---
layout: layout.html
breadcrumb: Methods
---

{% if methods.size == 0 %}
  {% include 'layout/no-methods.md' %}
{% endif %}

{%- for method in methods %}
  {%- assign href = '/' | append: outcome.slug | append: '/methods/' | append: method.slug %}
  {%-
    include 'card.html',
    title: method.title,
    content: method.description,
    href: href
  %}
{%- endfor %}
