import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ta';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;