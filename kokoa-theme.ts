import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";
import type { CSSRuleObject } from "tailwindcss/types/config.js";

export const kokoa_theme: CustomThemeConfig & CSSRuleObject = {
  name: "kokoa-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base":
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    "--theme-font-family-heading":
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    "--theme-font-color-base": "var(--color-surface-900)",
    "--theme-font-color-dark": "var(--color-primary-50)",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "2px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #fc9314
    "--color-primary-50": "255 239 220", // #ffefdc
    "--color-primary-100": "254 233 208", // #fee9d0
    "--color-primary-200": "254 228 196", // #fee4c4
    "--color-primary-300": "254 212 161", // #fed4a1
    "--color-primary-400": "253 179 91", // #fdb35b
    "--color-primary-500": "252 147 20", // #fc9314
    "--color-primary-600": "227 132 18", // #e38412
    "--color-primary-700": "189 110 15", // #bd6e0f
    "--color-primary-800": "151 88 12", // #97580c
    "--color-primary-900": "123 72 10", // #7b480a
    // secondary | #7db138
    "--color-secondary-50": "236 243 225", // #ecf3e1
    "--color-secondary-100": "229 239 215", // #e5efd7
    "--color-secondary-200": "223 236 205", // #dfeccd
    "--color-secondary-300": "203 224 175", // #cbe0af
    "--color-secondary-400": "164 200 116", // #a4c874
    "--color-secondary-500": "125 177 56", // #7db138
    "--color-secondary-600": "113 159 50", // #719f32
    "--color-secondary-700": "94 133 42", // #5e852a
    "--color-secondary-800": "75 106 34", // #4b6a22
    "--color-secondary-900": "61 87 27", // #3d571b
    // tertiary | #f07644
    "--color-tertiary-50": "253 234 227", // #fdeae3
    "--color-tertiary-100": "252 228 218", // #fce4da
    "--color-tertiary-200": "251 221 208", // #fbddd0
    "--color-tertiary-300": "249 200 180", // #f9c8b4
    "--color-tertiary-400": "245 159 124", // #f59f7c
    "--color-tertiary-500": "240 118 68", // #f07644
    "--color-tertiary-600": "216 106 61", // #d86a3d
    "--color-tertiary-700": "180 89 51", // #b45933
    "--color-tertiary-800": "144 71 41", // #904729
    "--color-tertiary-900": "118 58 33", // #763a21
    // success | #5dba9e
    "--color-success-50": "231 245 240", // #e7f5f0
    "--color-success-100": "223 241 236", // #dff1ec
    "--color-success-200": "215 238 231", // #d7eee7
    "--color-success-300": "190 227 216", // #bee3d8
    "--color-success-400": "142 207 187", // #8ecfbb
    "--color-success-500": "93 186 158", // #5dba9e
    "--color-success-600": "84 167 142", // #54a78e
    "--color-success-700": "70 140 119", // #468c77
    "--color-success-800": "56 112 95", // #38705f
    "--color-success-900": "46 91 77", // #2e5b4d
    // warning | #d2ad11
    "--color-warning-50": "248 243 219", // #f8f3db
    "--color-warning-100": "246 239 207", // #f6efcf
    "--color-warning-200": "244 235 196", // #f4ebc4
    "--color-warning-300": "237 222 160", // #eddea0
    "--color-warning-400": "224 198 88", // #e0c658
    "--color-warning-500": "210 173 17", // #d2ad11
    "--color-warning-600": "189 156 15", // #bd9c0f
    "--color-warning-700": "158 130 13", // #9e820d
    "--color-warning-800": "126 104 10", // #7e680a
    "--color-warning-900": "103 85 8", // #675508
    // error | #ff6452
    "--color-error-50": "255 232 229", // #ffe8e5
    "--color-error-100": "255 224 220", // #ffe0dc
    "--color-error-200": "255 216 212", // #ffd8d4
    "--color-error-300": "255 193 186", // #ffc1ba
    "--color-error-400": "255 147 134", // #ff9386
    "--color-error-500": "255 100 82", // #ff6452
    "--color-error-600": "230 90 74", // #e65a4a
    "--color-error-700": "191 75 62", // #bf4b3e
    "--color-error-800": "153 60 49", // #993c31
    "--color-error-900": "125 49 40", // #7d3128
    // surface | #68718c
    "--color-surface-50": "232 234 238", // #e8eaee
    "--color-surface-100": "225 227 232", // #e1e3e8
    "--color-surface-200": "217 220 226", // #d9dce2
    "--color-surface-300": "195 198 209", // #c3c6d1
    "--color-surface-400": "149 156 175", // #959caf
    "--color-surface-500": "104 113 140", // #68718c
    "--color-surface-600": "94 102 126", // #5e667e
    "--color-surface-700": "78 85 105", // #4e5569
    "--color-surface-800": "62 68 84", // #3e4454
    "--color-surface-900": "51 55 69", // #333745
  },
};
