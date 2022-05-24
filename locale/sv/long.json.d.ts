import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sv';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;