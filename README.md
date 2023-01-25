# Results of the investigation

- Washi/MUI and Tailwind can be used together (themes, in-line styles, styled API).
- If Tailwind is applied to a MUI/Washi component, Tailwind styles are overrided by MUI/Washi styles.
- Tailwind theme is customizable and useful, but there is a learning curve to setup everything and use it correctly
- The cost is significantly lower to style MUI components with the styled API like we already did in Washi -> Tailwind doesn't cover our needs in terms of ease of use and cost for styling MUI components.
- Tailwind is useful at building (responsive) containers -> Take a look at src/molecules/UserCardMUI.tsx and src/molecules/UserCardTailwind.tsx
