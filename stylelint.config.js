module.exports = {
    "extends": [
      "stylelint-config-standard",
      "stylelint-config-idiomatic-order"
    ],
    "plugins": [
      "stylelint-scss",
      "stylelint-order",
      "stylelint-declaration-block-no-ignored-properties"
    ],
    "rules": {
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "apply",
            "at-root",
            "layer",
            "include",
            "mixin",
            "responsive",
            "screen",
            "tailwind",
            "use",
            "variants"
          ]
        }
      ],
      "declaration-empty-line-before": null,
      "function-comma-newline-after": "always-multi-line",
      "function-comma-newline-before": "never-multi-line",
      "function-comma-space-after": "always-single-line",
      "function-comma-space-before": "never",    
      "indentation": 2,
      "max-line-length": 80,
      "max-empty-lines": 5,
      "no-descending-specificity": null,
      "no-eol-whitespace": null, 
      "order/properties-order": [
        [
            {
                "properties": [
                    "position",
                    "top",
                    "right",
                    "bottom",
                    "left",
                    "z-index"
                ]
            },
            {
                "properties": [
                    "display",
                    "float",
                    "clear",
                    "flex",
                    "flex-grow",
                    "flex-shrink",
                    "flex-basis",
                    "width",
                    "max-width",
                    "min-width",
                    "height",
                    "max-height",
                    "min-height"
                ]
            },
            {
                "properties": [
                    "font",
                    "font-size",
                    "font-weight",
                    "font-style",
                    "font-family",
                    "font-variant",
                    "font-feature",
                    "font-kerning",
                    "font-stretch",
                    "line-height",
                    "color",
                    "text",
                    "text-align",
                    "text-decoration",
                    "text-transform",
                    "letter-spacing"
                ]
            },
            {
                "properties": [
                    "background",
                    "background-color",
                    "background-image",
                    "background-origin",
                    "background-position",
                    "background-repeat",
                    "background-size",
                    "border",
                    "border-top",
                    "border-right",
                    "border-bottom",
                    "border-left",
                    "margin",
                    "margin-top",
                    "margin-right",
                    "margin-bottom",
                    "margin-left",
                    "padding",
                    "padding-top",
                    "padding-right",
                    "padding-bottom",
                    "padding-left"
                ]
            }
        ],
        {
            "unspecified": "bottomAlphabetical"
        }
    ],   
      "selector-nested-pattern": "^&",
      "value-keyword-case": null    
    }
  }