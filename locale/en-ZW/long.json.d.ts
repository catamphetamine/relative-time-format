import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ZW';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;