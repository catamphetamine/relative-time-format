import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ca';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;