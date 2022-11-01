import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bgc';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;