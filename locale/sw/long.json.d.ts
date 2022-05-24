import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sw';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;