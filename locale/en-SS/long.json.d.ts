import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SS';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;