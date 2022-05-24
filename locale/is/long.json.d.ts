import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'is';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;