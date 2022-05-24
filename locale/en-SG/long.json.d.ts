import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SG';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;