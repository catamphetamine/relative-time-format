import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fa';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;