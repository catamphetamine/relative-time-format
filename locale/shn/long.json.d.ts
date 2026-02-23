import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'shn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;