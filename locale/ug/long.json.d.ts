import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ug';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;