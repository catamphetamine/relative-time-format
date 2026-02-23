import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bua';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;