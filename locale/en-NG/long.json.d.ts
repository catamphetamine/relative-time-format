import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NG';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;