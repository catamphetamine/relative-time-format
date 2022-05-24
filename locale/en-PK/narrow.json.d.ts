import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PK';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;