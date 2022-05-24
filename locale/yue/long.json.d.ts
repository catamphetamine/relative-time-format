import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yue';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;