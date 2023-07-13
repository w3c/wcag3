---
layout: layout.html
subtitle: Test
---

{% if methods.size == 0 %}
  {% include 'layout/no-methods.md' %}
{% endif %}

{%- for method in methods %}
  {%- assign href = '/' | append: outcome.slug 
    | append: '/methods/' | append: method.slug | append: '/test/' %}
  {%-
    include 'card.html',
    title: method.title,
    content: method.description,
    href: href
  %}
{% endfor %}
