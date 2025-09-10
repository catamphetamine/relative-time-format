import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;