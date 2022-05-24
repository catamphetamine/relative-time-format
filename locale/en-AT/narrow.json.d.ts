import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;