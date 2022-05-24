import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'el';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;