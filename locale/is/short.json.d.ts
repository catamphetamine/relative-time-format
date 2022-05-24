import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'is';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;