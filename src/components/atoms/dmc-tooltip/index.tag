dmc-tooltip(class="Tooltip Tooltip--{ opts.placement }")
  .Tooltip__basePoint
    .Tooltip__text { opts.label }

  script.
    import script from './index';
    this.external(script);
