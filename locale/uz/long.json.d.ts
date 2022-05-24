import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'uz';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;