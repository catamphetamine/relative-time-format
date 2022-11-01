import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bgc';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;