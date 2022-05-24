import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DG';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;