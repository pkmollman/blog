// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const fairydust: CustomThemeConfig = {
	name: 'fairydust',
	properties: {
			// =~= Theme Properties =~=
			"--theme-font-family-base": `system-ui`,
			"--theme-font-family-heading": `system-ui`,
			"--theme-font-color-base": "0 0 0",
			"--theme-font-color-dark": "255 255 255",
			"--theme-rounded-base": "9999px",
			"--theme-rounded-container": "8px",
			"--theme-border-base": "2px",
			// =~= Theme On-X Colors =~=
			"--on-primary": "var(--color-surface-50)",
			"--on-secondary": "var(--color-surface-800)",
			"--on-tertiary": "var(--color-surface-800)",
			"--on-success": "var(--color-surface-800)",
			"--on-warning": "var(--color-surface-800)",
			"--on-error": "var(--color-surface-50)",
			"--on-surface": "var(--color-surface-50)",
			// =~= Theme Colors  =~=
			// primary | #6461c2
			"--color-primary-50": "232 231 246", // #e8e7f6
			"--color-primary-100": "224 223 243", // #e0dff3
			"--color-primary-200": "216 216 240", // #d8d8f0
			"--color-primary-300": "193 192 231", // #c1c0e7
			"--color-primary-400": "147 144 212", // #9390d4
			"--color-primary-500": "100 97 194", // #6461c2
			"--color-primary-600": "90 87 175", // #5a57af
			"--color-primary-700": "75 73 146", // #4b4992
			"--color-primary-800": "60 58 116", // #3c3a74
			"--color-primary-900": "49 48 95", // #31305f
			// secondary | #e39aac
			"--color-secondary-50": "251 240 243", // #fbf0f3
			"--color-secondary-100": "249 235 238", // #f9ebee
			"--color-secondary-200": "248 230 234", // #f8e6ea
			"--color-secondary-300": "244 215 222", // #f4d7de
			"--color-secondary-400": "235 184 197", // #ebb8c5
			"--color-secondary-500": "227 154 172", // #e39aac
			"--color-secondary-600": "204 139 155", // #cc8b9b
			"--color-secondary-700": "170 116 129", // #aa7481
			"--color-secondary-800": "136 92 103", // #885c67
			"--color-secondary-900": "111 75 84", // #6f4b54
			// tertiary | #2ba9b4
			"--color-tertiary-50": "223 242 244", // #dff2f4
			"--color-tertiary-100": "213 238 240", // #d5eef0
			"--color-tertiary-200": "202 234 236", // #caeaec
			"--color-tertiary-300": "170 221 225", // #aadde1
			"--color-tertiary-400": "107 195 203", // #6bc3cb
			"--color-tertiary-500": "43 169 180", // #2ba9b4
			"--color-tertiary-600": "39 152 162", // #2798a2
			"--color-tertiary-700": "32 127 135", // #207f87
			"--color-tertiary-800": "26 101 108", // #1a656c
			"--color-tertiary-900": "21 83 88", // #155358
			// success | #93d4b5
			"--color-success-50": "239 249 244", // #eff9f4
			"--color-success-100": "233 246 240", // #e9f6f0
			"--color-success-200": "228 244 237", // #e4f4ed
			"--color-success-300": "212 238 225", // #d4eee1
			"--color-success-400": "179 225 203", // #b3e1cb
			"--color-success-500": "147 212 181", // #93d4b5
			"--color-success-600": "132 191 163", // #84bfa3
			"--color-success-700": "110 159 136", // #6e9f88
			"--color-success-800": "88 127 109", // #587f6d
			"--color-success-900": "72 104 89", // #486859
			// warning | #f0dab1
			"--color-warning-50": "253 249 243", // #fdf9f3
			"--color-warning-100": "252 248 239", // #fcf8ef
			"--color-warning-200": "251 246 236", // #fbf6ec
			"--color-warning-300": "249 240 224", // #f9f0e0
			"--color-warning-400": "245 229 200", // #f5e5c8
			"--color-warning-500": "240 218 177", // #f0dab1
			"--color-warning-600": "216 196 159", // #d8c49f
			"--color-warning-700": "180 164 133", // #b4a485
			"--color-warning-800": "144 131 106", // #90836a
			"--color-warning-900": "118 107 87", // #766b57
			// error | #c45d9f
			"--color-error-50": "246 231 241", // #f6e7f1
			"--color-error-100": "243 223 236", // #f3dfec
			"--color-error-200": "240 215 231", // #f0d7e7
			"--color-error-300": "231 190 217", // #e7bed9
			"--color-error-400": "214 142 188", // #d68ebc
			"--color-error-500": "196 93 159", // #c45d9f
			"--color-error-600": "176 84 143", // #b0548f
			"--color-error-700": "147 70 119", // #934677
			"--color-error-800": "118 56 95", // #76385f
			"--color-error-900": "96 46 78", // #602e4e
			// surface | #634b7d
			"--color-surface-50": "232 228 236", // #e8e4ec
			"--color-surface-100": "224 219 229", // #e0dbe5
			"--color-surface-200": "216 210 223", // #d8d2df
			"--color-surface-300": "193 183 203", // #c1b7cb
			"--color-surface-400": "146 129 164", // #9281a4
			"--color-surface-500": "99 75 125", // #634b7d
			"--color-surface-600": "89 68 113", // #594471
			"--color-surface-700": "74 56 94", // #4a385e
			"--color-surface-800": "59 45 75", // #3b2d4b
			"--color-surface-900": "49 37 61", // #31253d
	}
}
