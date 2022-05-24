import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'br';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;