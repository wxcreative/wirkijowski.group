export namespace SCommon {
	export enum ETheme {
		default = 'default',
		light = 'light',
		dark = 'dark',
	}
	
	export type TTheme = ETheme | keyof typeof ETheme;
	
	export enum ESize {
		sm = 'sm',
		md = 'md',
		lg = 'lg',
	}
	
	export type TSize = ESize | keyof typeof ESize;
}