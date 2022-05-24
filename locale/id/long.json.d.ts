import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'id';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;