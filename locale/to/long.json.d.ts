import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'to';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;