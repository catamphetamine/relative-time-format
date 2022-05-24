import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mk';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;