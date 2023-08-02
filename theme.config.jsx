export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – GAntich'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="GAntich" />
      <meta property="og:description" content="GAntich documentation page" />
    </>
  ),
  darkMode: true,
  primaryHue: 300,
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  logo: (
    <svg viewBox="0 0 106.139 51.251" width="100" height="50" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="editing-vr">
          <feFlood flood-color="#d8ebf9" flood-opacity=".7" result="c1"/>
          <feFlood flood-color="red" flood-opacity=".7" result="c3"/>
          <feComposite operator="in" in="c1" in2="SourceAlpha" result="text-c1"/>
          <feComposite operator="in" in="c3" in2="SourceAlpha" result="text-c3"/>
          <feOffset in="text-c1" dx="2" dy="2" result="text1"/>
          <feOffset in="text-c3" dx="-2" dy="-2" result="text3"/>
          <feBlend in="SourceGraphic" in2="text1" mode="multiply" result="text4"/>
          <feBlend in="text4" in2="text3" mode="multiply"/>
        </filter>
      </defs>
      <g filter="url(#editing-vr)" transform="matrix(1, 0, 0, 1, -197.0606231689453, -63.840736389160156)">
        <path fill="blue" d="M211.7 112.14q-.51 0-.58-.68.99-6.11 1.71-9.04.72-2.92 1.91-6.76-2.91 2.62-7.62 2.62-2.3 0-3.92-1.34-1.61-1.35-2.45-3.49-.83-2.15-.83-4.58 0-4.61 1.91-9.73 1.9-5.12 4.86-8.54 2.96-3.42 5.9-3.42 2.66 0 4.28 1.58 1.61 1.58 2.09 4.4-.13.96-.51.96-.32 0-.78-.7-.47-.71-.92-1.73-1.24-3.01-4.16-3.01-2.88 0-5.47 3.28t-4.16 7.94q-1.57 4.65-1.57 8.3 0 3.81 1.41 6.22 1.41 2.42 4.55 2.42 5.53 0 7.55-3.07.51-.77.7-1.44.19-.67.19-1.41-.16-.45-1.53-1.86-1.38-1.4-2.56-2.24-2.05.42-4.67.77-.64-.06-.64-.57 0-.42.38-.74 2.08-1.5 3.62-1.5.92 0 1.79.48 3.9-.87 8.7-2.4.77 0 .77.54 0 .19-.13.48-4.13 6.82-6.21 14.69-.67 2.49-1.05 4.33-.39 1.84-.99 4.88l-.68 3.46q-.03.35-.33.62-.31.28-.56.28Zm5.18-22.31q.51-1.12 1.36-2.81.85-1.7 1.17-2.24-2.88.96-5.7 1.63.74.7 1.7 1.76.96 1.05 1.47 1.66Zm23.62-1.53q.22.03 1.01.12.78.1 1 .28.23.17.23.49 0 .29-.31.56-.3.27-.62.24l-1.09-.13q.13 1.32.51 4.37.39 3.06.45 2.9-.03.32-.29.54-.25.23-.54.23-.58 0-.96-1.64-.19-.92-.42-3.29-.28-2.79-.35-3.3-2.62-.22-6.72-.29l-1.92-.03q-4.13 6.21-7.77 7.91-1.22.6-1.92.6-.84 0-.84-.8 0-.38.29-.68.29-.31.58-.31t.48.26q2.17-.87 3.87-2.51 1.7-1.65 3.74-4.5l-1.28-.06q-1.5-.07-2.14-.18-.64-.11-.64-.53 0-.32.27-.61.27-.28.63-.35.8.13 4.16.29 3.07-4.61 6.33-10.93 3.27-6.32 4-9.65.13-.32.42-.54.29-.22.54-.22.23 0 .43.35.21.35.21.7 0 .32-.16.48-.51 1.89-1.04 6.91-.53 5.03-.53 7.14 0 2.53.39 6.18Zm-1.79-5.83q0-3.61.67-8.7-1.73 3.61-4 7.61t-3.91 6.53q4.39 0 7.49.23-.25-2.21-.25-5.67Zm2.97 14.66v-.1.1Zm13.19.86q-.52 0-.74-.19-.22-.19-.16-.67l1.57-9.35q.29-1.72.29-2.65 0-1.54-.87-1.54-1.05 0-2.89 3.67-1.84 3.66-3.8 8.27l-.44 1.02q-.58 1.25-1.16 1.25-.32 0-.4-.14-.08-.15-.08-.63t1.27-7.39q1.26-6.91 1.45-7.26.2-.39.34-.48.14-.1.56-.1.38 0 .62.29t.24.57q0 .2-.32 1.25-.96 3.27-1.5 6.34l-.32 1.89q.54-1.16.8-1.8.9-2.08 1.65-3.64.75-1.57 1.68-2.92 1.41-2.01 2.62-2.01 2.15 0 2.15 3.45 0 .74-.2 1.89-.19 1.15-.41 2.37-.45 2.34-.58 3.2l-.22 1.47q-.29 1.99-.51 2.91-.23.93-.64.93Zm8.44-.06q-1.12 0-1.68-.58-.56-.57-.56-2.08 0-.83.2-1.92l.28-1.82.36-1.51.19-.86.41-1.76q.07-.42.29-1.34l.16-.64.29-1.38.19-.96q-1.25 0-2.3.16-.64-.1-.64-.54 0-.32.25-.61.26-.29.61-.32l2.31.06.16-.8q.06-.64.25-1.47t.48-1.47q.29-.71.83-.71.52 0 .52.58v.19q-.13.64-.23.93l-.54 2.72h2.3q1.22 0 1.51.19.25.19.25.48 0 .51-.46.66-.47.14-1.59.14-1.02 0-2.27-.09-.19 1.05-1.31 5.85-1.02 4.35-1.02 5.51 0 1.24.28 1.63.16.25.68.25.44 0 .78-.24t.69-.65q.35-.45.61-.67.25-.23.54-.23.64 0 .64.64 0 .32-.64 1.06-.64.73-1.22 1.18-.51.42-1.6.42Zm8.07.19q-1.09 0-1.09-1.76 0-.45.16-.8.16-.54.29-1.25l.48-2.14.64-2.82q.32-1.57.77-3.52.06-.19.12-.64.32-1.37.32-1.6v-.32q0-.25-.22-1.05 0-.39.27-.71.27-.32.66-.32.35 0 .61.48.25.48.25 1.06 0 .64-1.47 6.91-1.47 6.27-1.47 6.66 0 .35.32.35.16 0 .57-.42.39-.38.64-.38.52 0 .52.64 0 .38-.45.77-.45.38-1.03.62-.57.24-.89.24Zm3.23-19.33q-.51 0-.77-.13h-.13q-.92 0-.92-1.08 0-.55.46-1 .46-.44 1.01-.44.54 0 1.02.38.55.54.55 1.06 0 .48-.37.84-.37.37-.85.37Zm5.66 19.39q-1.53 0-2.41-1.13-.88-1.14-.88-2.74 0-2.81 1.04-5.82 1.04-3.01 2.73-5.03 1.67-2.01 3.59-2.01 1.37 0 1.79.99.1.16.16.34.06.17.13.33.16.45.32.51.13.32.13.48 0 .29-.28.55-.27.25-.59.25-.67 0-.86-.99-.19-.99-1.06-.99-1.15 0-2.43 1.78-1.28 1.77-2.21 4.49-.89 2.56-.89 4.58 0 2.85 2.08 2.85 1.05 0 1.95-1 .09-.12.35-.43.26-.3.48-.45.22-.14.42-.14.6 0 .6.54 0 .64-.6 1.36-.61.72-1.57 1.2-.96.48-1.99.48Zm8.42-.12q-.54 0-.54-.55 0-.45 3.13-14.88.9-4.32 1.78-8.75t1.29-6.48q.16-.48.55-.48.83 0 1.02.8-.45 2.3-1.44 7.09-.99 4.78-1.69 8.11l-1.22 5.6q3.26-6.72 6.18-6.72 1.12 0 1.72.88.61.88.61 2.1 0 1.18-.41 3.13l-.52 2.69q-.89 4.64-.89 5.28l.06 1.25q0 .41-.27.65-.27.24-.72.24-.42 0-.64-.27-.22-.27-.22-.75 0-.29.03-.45l1.85-10.4q.1-.48.1-1.15 0-1.6-.9-1.6-1.02 0-2.43 1.78-1.41 1.77-2.64 4.01-1.23 2.24-1.55 3.2-.38 1.15-.74 2.58-.35 1.42-.35 1.81.03.8-.16 1.04t-.99.24Z"/>
      </g>
    </svg>
  )
}
