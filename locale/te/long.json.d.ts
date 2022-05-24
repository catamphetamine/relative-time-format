import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'te';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;