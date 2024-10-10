---
layout: outcome.html
---

{{ content }}

{% if methods.size == 0 %}
  {% include 'layout/no-methods.md' %}
{% else %}
  <h2>Methods</h2>

  {%- for method in methods %}
    {%- assign href = '/' | append: outcome.slug | append: '/methods/' | append: method.slug %}
    {%-
      include 'card.html',
      title: method.title,
      content: method.description,
      href: href
    %}
  {%- endfor %}
{% endif %}