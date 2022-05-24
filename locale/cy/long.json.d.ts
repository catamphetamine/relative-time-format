import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cy';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;