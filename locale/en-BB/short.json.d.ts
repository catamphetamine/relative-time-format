import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BB';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;