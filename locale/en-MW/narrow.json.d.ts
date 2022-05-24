import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MW';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;