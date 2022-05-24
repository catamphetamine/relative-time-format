import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'is';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;