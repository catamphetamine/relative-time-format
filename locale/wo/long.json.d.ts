import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'wo';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;