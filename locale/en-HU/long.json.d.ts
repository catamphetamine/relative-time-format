import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-HU';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;