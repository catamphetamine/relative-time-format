import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tyv';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;