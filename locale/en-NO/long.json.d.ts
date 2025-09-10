import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;