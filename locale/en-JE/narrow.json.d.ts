import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-JE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;