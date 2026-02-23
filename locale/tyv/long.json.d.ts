import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tyv';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;